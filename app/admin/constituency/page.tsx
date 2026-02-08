'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ConstituencyEditor() {
  const [constituencyData, setConstituencyData] = useState({
    name: '',
    representative: '',
    party: '',
    electionYear: '',
    communities: '',
    population: ''
  });
  
  const [initiatives, setInitiatives] = useState([
    { id: 1, title: '', description: '', icon: '' }
  ]);
  
  const [visionContent, setVisionContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const router = useRouter();

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  // Fetch existing constituency content
  useEffect(() => {
    const fetchConstituencyContent = async () => {
      try {
        // In a real implementation, you would fetch from your API
        // For now, we'll use the default values
        setConstituencyData({
          name: "Nasarawa Federal Constituency",
          representative: "Hon. Hassan Shehu Hussain (Hon. HASH)",
          party: "All Progressives Congress (APC)",
          electionYear: "2023",
          communities: "Gama, Tokarawa, Gawuna, Gwagwarwa, Tudun Wada, Hotoro North, Hotoro South, Kaura Goje, Giginyu, Dakata, Kawaji",
          population: "Approximately 600,000 residents"
        });
        
        setInitiatives([
          {
            id: 1,
            title: "Youth Empowerment",
            description: "Providing skills, tools, and capital to youth for self-reliance.",
            icon: "trending_up"
          },
          {
            id: 2,
            title: "Education Support",
            description: "Scholarships, classroom construction, and learning materials for students.",
            icon: "school"
          },
          {
            id: 3,
            title: "Infrastructure Development",
            description: "Solar street lights, boreholes, and road construction projects.",
            icon: "build"
          },
          {
            id: 4,
            title: "Community Health",
            description: "Medical outreach and support for health centers in the constituency.",
            icon: "local_hospital"
          }
        ]);
        
        setVisionContent("Hon. Hassan Shehu Hussain's vision for Nasarawa Federal Constituency is built on the pillars of accessible education, economic empowerment, and infrastructural development. By leveraging legislative tools and community engagement, he aims to transform the constituency into a hub of opportunity and sustainable growth, ensuring that every resident benefits from democratic dividends.");
      } catch (err) {
        setError('Failed to load constituency content');
      } finally {
        setLoading(false);
      }
    };

    fetchConstituencyContent();
  }, []);

  const handleConstituencyDataChange = (field, value) => {
    setConstituencyData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInitiativeChange = (id, field, value) => {
    setInitiatives(prev => 
      prev.map(initiative => 
        initiative.id === id 
          ? { ...initiative, [field]: value } 
          : initiative
      )
    );
  };

  const addInitiative = () => {
    setInitiatives(prev => [
      ...prev,
      { id: Date.now(), title: '', description: '', icon: '' }
    ]);
  };

  const removeInitiative = (id) => {
    if (initiatives.length > 1) {
      setInitiatives(prev => prev.filter(initiative => initiative.id !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess(false);

    try {
      // In a real implementation, you would save to your API
      // For now, we'll just show a success message
      setTimeout(() => {
        setSuccess(true);
        setSaving(false);
        setTimeout(() => setSuccess(false), 3000);
      }, 1000);
    } catch (err) {
      setError('Failed to save constituency content');
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Constituency Page Editor</h1>
        <button 
          onClick={handleSubmit}
          disabled={saving}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 text-green-500 p-3 rounded">
          Constituency content updated successfully!
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Constituency Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Constituency Name
            </label>
            <input
              type="text"
              value={constituencyData.name}
              onChange={(e) => handleConstituencyDataChange('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter constituency name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Representative
            </label>
            <input
              type="text"
              value={constituencyData.representative}
              onChange={(e) => handleConstituencyDataChange('representative', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter representative name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Political Party
            </label>
            <input
              type="text"
              value={constituencyData.party}
              onChange={(e) => handleConstituencyDataChange('party', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter party name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Election Year
            </label>
            <input
              type="text"
              value={constituencyData.electionYear}
              onChange={(e) => handleConstituencyDataChange('electionYear', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter election year"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Communities (comma separated)
            </label>
            <input
              type="text"
              value={constituencyData.communities}
              onChange={(e) => handleConstituencyDataChange('communities', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter communities"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Population
            </label>
            <input
              type="text"
              value={constituencyData.population}
              onChange={(e) => handleConstituencyDataChange('population', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter population information"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Key Initiatives</h2>
          <button 
            onClick={addInitiative}
            className="text-green-600 hover:text-green-800"
          >
            + Add Initiative
          </button>
        </div>
        
        <div className="space-y-4">
          {initiatives.map((initiative) => (
            <div key={initiative.id} className="border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={initiative.title}
                    onChange={(e) => handleInitiativeChange(initiative.id, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter initiative title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Icon
                  </label>
                  <input
                    type="text"
                    value={initiative.icon}
                    onChange={(e) => handleInitiativeChange(initiative.id, 'icon', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter icon name"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={initiative.description}
                    onChange={(e) => handleInitiativeChange(initiative.id, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter initiative description"
                  />
                </div>
              </div>
              
              {initiatives.length > 1 && (
                <button
                  onClick={() => removeInitiative(initiative.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove Initiative
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Vision Content</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vision Statement
          </label>
          <textarea
            value={visionContent}
            onChange={(e) => setVisionContent(e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Enter vision content"
          />
        </div>
      </div>
    </div>
  );
}