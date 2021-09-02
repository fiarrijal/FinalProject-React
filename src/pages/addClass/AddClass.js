import React from "react";
import AddClassContent from "../../parts/AddClassContent/AddClassContent";
import Sidebar from "../../parts/sidebar/Sidebar";

function AddClass() {
	return (
		<div>
			<Sidebar titles="Buat Kelas Baru" content={<AddClassContent />} />
		</div>
	);
}

export default AddClass;
