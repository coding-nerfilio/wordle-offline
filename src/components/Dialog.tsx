const Dialog = ({
  active,
  title,
  content,
  onClose,
}: {
  active: boolean;
  title: string;
  content: any;
  onClose: any;
}) => {
  if (!active) return null;

  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
        <div className="relative  max-w-3xl mx-auto my-6">
          <div className="bg-white border-0 shadow-lg rounded-lg relative flex flex-col w-full p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => onClose()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4">{content}</div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
    </>
  );
};

export default Dialog;
