import Complete from "./Tasklist/Complete";
import Ongoing from "./Tasklist/Ongoing";
import Todo from "./Tasklist/Todo";


const Everything = () => {
    return (
        <div className="text-black">
            <div className="flex gap-5 mt-10">
            <Todo></Todo>
            <Ongoing></Ongoing>
            <Complete></Complete>
            </div>
        </div>
    );
};

export default Everything;