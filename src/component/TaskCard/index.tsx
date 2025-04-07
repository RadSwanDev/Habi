interface TaskType {
    title: string;
    status: string;
    description: string;
    updated: string;
    created: string;
    deleteBtn : ()=> void,
    editBtn : ()=> void,
    statusBtn : ()=>void
  }
  
  export default function TaskCard({
    title,
    status,
    description,
    created,
    updated,
    deleteBtn,
    editBtn,
    statusBtn
  } : TaskType) {
    return (
      <div className="bg-gray-50 shadow-lg rounded-lg p-4 mx-auto w-full max-w-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-gray-200 pb-2">
          <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
          <p className="text-sm sm:text-lg text-gray-600">Status: {status}</p>
        </div>
  
        {/* Deskripsi */}
        <div className="mt-3">
          <p className="text-sm sm:text-base">{description}</p>
        </div>
  
        <div className="my-3 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-500">
          <p>Created: {created}</p>
          <p>Updated: {updated}</p>
        </div>
  
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mt-3">
          <button onClick={statusBtn} className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 rounded-lg w-full sm:w-32 transition">
            Status
          </button>
          <button className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-lg w-full sm:w-32 transition" onClick={editBtn}>
            Edit
          </button>
          <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-lg w-full sm:w-32 transition" onClick={deleteBtn}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  