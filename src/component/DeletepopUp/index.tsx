export default function DeletePopUP({cancelButton,yesButton} : {cancelButton : () => void, yesButton : ()=>void}) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-4 rounded-xl shadow-2xl w-full max-w-md">
          <div className="text-black border-b border-gray-200 pb-2 mb-4">
            Task ini akan dihapus, kamu yakin?
          </div>
          <div className="flex justify-end">
            <button className="bg-lime-300 text-green-600 rounded-2xl px-4 py-2 mx-1 w-24  hover:cursor-pointer" onClick={yesButton}>
              Yes
            </button>
            <button className="bg-red-300 text-red-600 rounded-2xl px-4 py-2 mx-1 w-24 hover:cursor-pointer" onClick={cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  