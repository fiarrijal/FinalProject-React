import React from "react";
import ProjectCollapse from "../../parts/ProjectCollapse/ProjectCollapse";
import Sidebar from "../../parts/sidebar/Sidebar";

function ProjectHome() {
	return <Sidebar titles="Beranda Project" content={<ProjectCollapse />} />;
}

export default ProjectHome;
