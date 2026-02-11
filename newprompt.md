# Antigravity Task: Migrate Local 'hon-hash' Project to 'Hon. Dr. Ghali Panda' Website

**Objective:** Transform the current local 'hon-hash' Next.js project into the 'Hon. Dr. Ghali Panda' website, incorporating branding, data, and assets from the 'ghalimeter' repository, while retaining the 'sticker-generator' feature if present in the current 'hon-hash' project.

**Context:**
*   **Current Project:** The active project in this workspace is a local clone of `hon-hash`.
*   **Asset/Data Source:** `https://github.com/archtech12/ghalimeter.git`
*   **Target Repository:** The final updated code will be pushed to `https://github.com/archtech12/Hon.-Dr.-Ghali-Panda.git` (after local verification ).

**Instructions (Execute in Planning Mode):**

1.  **Clone ghalimeter:**
    *   Clone `https://github.com/archtech12/ghalimeter.git` into a temporary directory (e.g., `/tmp/ghalimeter_temp` ).

2.  **Asset Migration:**
    *   **Delete** the existing `public/assets` directory in the current project.
    *   **Copy** the entire `public/assets` directory from `/tmp/ghalimeter_temp/public/assets` to the current project's `public/assets`.
    *   **Copy** PWA icons (e.g., `android-chrome-*.png`, `apple-touch-icon.png`, `favicon.ico`, `site.webmanifest`) from `/tmp/ghalimeter_temp/public` to the current project's `public` directory, overwriting existing files.

3.  **Data Migration:**
    *   **Copy** `lib/projects.ts` from `/tmp/ghalimeter_temp/lib/projects.ts` to the current project's `lib/projects.ts`, overwriting the existing file.
    *   **Copy** `lib/data.ts` from `/tmp/ghalimeter_temp/lib/data.ts` to the current project's `lib/data.ts`, overwriting the existing file.

4.  **Feature Porting (Sticker Generator):**
    *   **Check** if the current project (hon-hash) contains the directory `app/(personal)/sticker-generator`.
    *   **If it exists**, ensure this directory and its contents are preserved in the final project structure. (No action needed if it's already part of the current project and not being overwritten by ghalimeter).

5.  **Critical Fixes:**
    *   **File:** `lib/projects.ts`
        *   **Search and Replace:** Globally replace all occurrences of `//assets/` with `/assets/`.
        *   **Export Fix:** Ensure the file exports `const projects` (not `projects2025`). If `projects2025` is found, rename it to `projects` and update the export statement accordingly.

6.  **Rebranding (Global Search & Replace - Case-Insensitive):**
    *   **Scope:** Apply these replacements across `app`, `components`, `lib`, and `public` directories.
    *   `"Hon Hash"` -> `"Hon. Dr. Ghali Panda"`
    *   `"Hon. Hash"` -> `"Hon. Dr. Ghali Panda"`
    *   `"Hon Hassan"` -> `"Hon. Dr. Ghali Panda"`
    *   `"Hon. Hassan"` -> `"Hon. Dr. Ghali Panda"`
    *   `"honhash"` -> `"ghalipanda"` (for emails/links)
    *   `"admin@honhash.gov.ng"` -> `"info@ghalipanda.com"`

7.  **Cleanup:**
    *   **Delete** the temporary directory `/tmp/ghalimeter_temp`.

8.  **Local Verification (Antigravity should perform these checks):**
    *   Verify `public/site.webmanifest` exists and contains the correct "Ghali Panda" name and icons.
    *   Verify the Projects Page loads images from `/assets/images/gallery/...` correctly.
    *   Verify the About Page shows "Dr. Ghali Panda".
    *   Verify the `sticker-generator` feature (if present) is still functional.

9.  **GitHub Synchronization:**
    *   **Commit** all changes with a descriptive message (e.g., "Migrate hon-hash to Ghali Panda website").
    *   **IMPORTANT:** After committing, explicitly use the **"Sync"** command/button in Antigravity to push these changes to the remote GitHub repository (`https://github.com/archtech12/Hon.-Dr.-Ghali-Panda.git` ).

**Confirmation:** Please confirm when all steps are completed and the local project is ready for deployment, and indicate that the changes have been synced to GitHub.