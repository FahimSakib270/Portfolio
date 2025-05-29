import React from "react";

const AddProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const projectData = Object.fromEntries(formData);

    // Convert comma-separated strings to arrays
    projectData.technologies = projectData.technologies
      .split(",")
      .map((tech) => tech.trim());
    projectData.tags = projectData.tags
      ? projectData.tags.split(",").map((tag) => tag.trim())
      : [];

    console.log("Submitted Project Data:", projectData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-center font-semibold my-5 text-4xl">
        Add New Project
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
          <label className="label">Project Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
            placeholder="Name of the project"
            required
          />
        </fieldset>

        {/* Description */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
          <label className="label">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Write  description about the project"
            rows="4"
            required
          ></textarea>
        </fieldset>

        {/* Technologies */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
          <label className="label">Technologies</label>
          <input
            type="text"
            name="technologies"
            className="input input-bordered w-full"
            placeholder=" React, Node.js, MongoDB (comma separated)"
          />
        </fieldset>

        {/* GitHub & Live Link - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">GitHub Link</label>
            <input
              type="url"
              name="githubLink"
              className="input input-bordered w-full"
              placeholder="https://github.com/yourusername/project-repo "
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Live Site Link</label>
            <input
              type="url"
              name="liveLink"
              className="input input-bordered w-full"
              placeholder=" Repo Url "
            />
          </fieldset>
        </div>

        {/* Category & Date - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              placeholder=" What kind of "
            />
          </fieldset>

          <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
            <label className="label">Date</label>
            <input
              type="date"
              name="date"
              className="input input-bordered w-full"
            />
          </fieldset>
        </div>

        {/* Featured Image & Additional Images */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
          <label className="label">Featured Image URL</label>
          <input
            type="url"
            name="featuredImage"
            className="input input-bordered w-full"
            placeholder="https://example.com/image.jpg "
          />
        </fieldset>

        {/* Tags */}
        <fieldset className="bg-base-200 border border-base-300 rounded-box p-4">
          <label className="label">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            className="input input-bordered w-full"
            placeholder="personal, frontend, fullstack"
          />
        </fieldset>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="btn  px-6 py-5 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-l hover:from-orange-500 hover:via-pink-500 hover:to-purple-500  hover:border-white hover:border-2 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
