import Todo from "./Tasklist/Todo";


const Everything = () => {
    return (
        <div className="text-black">
            <div className="flex gap-5">
            <Todo></Todo>
            <h1>Ongoinglist</h1>
            <h1>Complete</h1>
            </div>
        </div>
    );
};

export default Everything;