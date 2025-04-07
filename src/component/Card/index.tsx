interface EditPopUpProps {
    editData: {
      title: string;
      description: string;
      status: string;
      created: string;
    };
    setEditData: React.Dispatch<React.SetStateAction<{
      title: string;
      description: string;
      status: string;
      created: string;
    }>>;
  }
  
  export default function EditPopUp({ editData, setEditData }: EditPopUpProps) {
    return (
      <div className="bg-gray-50 shadow-lg rounded-lg p-4 mx-auto w-full max-w-2xl my-3">
        <h1 className="text-2xl font-bold text-center">Edit Section</h1>
        <div className="text-center">
          <input
            type="text"
            className="border-b-2 my-1 shadow-md border-lime-500 w-96 rounded-lg p-2"
            placeholder="Title Task"
            value={editData.title}
            onChange={(e) => setEditData(prev => ({ ...prev, title: e.target.value }))}
          />
          <br />
          <input
            type="text"
            className="border-b-2 border-lime-500 my-1 shadow-md w-96 rounded-lg p-2"
            placeholder="Description"
            value={editData.description}
            onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
          />
          <br />
          <input
            type="text"
            className="border-b-2 border-lime-500 my-1 shadow-md w-96 rounded-lg p-2"
            placeholder="Created At"
            value={editData.created}
            onChange={(e) => setEditData(prev => ({ ...prev, created: e.target.value }))}
          />
          <br />
          <select
            value={editData.status}
            className="my-2 p-1 border-lime-500 border-2 rounded-full bg-lime-200 text-black"
            onChange={(e) => setEditData(prev => ({ ...prev, status: e.target.value }))}
          >
            <option value={""}>Select Status</option>
            <option value={"pending"}>Pending</option>
            <option value={"in-progress"}>In Progress</option>
            <option value={"completed"}>Completed</option>
          </select>
        </div>
        <div className="flex justify-center gap-3">
          <button className="bg-lime-300 text-green-600 hover:border border-lime-600 rounded-2xl px-4 py-2 mx-1 w-24 hover:cursor-pointer">Oke</button>
          <button
            className="bg-red-300 hover:border hover:border-red-600 border border-red-300 text-red-600 rounded-2xl px-4 py-2 mx-1 w-24 hover:cursor-pointer"
            onClick={() => window.location.href = "/dashboard"}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
  