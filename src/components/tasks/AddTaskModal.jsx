import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/tasksSlice";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="I am using headlessui">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="deadline">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            id="deadline"
            {...register("deadline")}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="assignTo">Asign to</label>
          <select
            className="w-full rounded-md"
            type="text"
            id="asignTo"
            {...register("asignTo")}
          >
            <option value="Rahim">Rahim</option>
            <option value="Karim">Karim</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="priority">Priority</label>
          <select
            className="w-full rounded-md"
            type="text"
            id="priority"
            {...register("priority")}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 bg-red-300 rounded-lg"
            onClick={() => onCancel()}
            type="button"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-300 rounded-lg" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
