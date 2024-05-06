import CodeHighlight from "./codehighlight";


const OilLifeCode = () => {
    return ( 
    <div>
          <pre>
          <code className="language-javascript">
            {`"use client";
import { useState } from "react";
import { Modal } from "./Modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../pages/api";
import BarChart from "./BarChart";

const Task = ({ car }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [carToEdit, setcarToEdit] = useState(car);


  const data = {
    labels: [car.text],
    datasets: [
      {
        label: "Oil Life Percentage",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWdth: 2,
        data: [car.oilLifePercentage, 100],
      },
    ],
  };

  const handleSubmitEditTodo = async (e) => {
    e.preventDefault();

    setcarToEdit({
      ...carToEdit,
      id: car.id,
      text: carToEdit.text,
      newMilage: carToEdit.newMilage,
      currentMilage: carToEdit.currentMilage,
      changeOilNow: carToEdit.changeOilNow,
    });
    console.log(carToEdit);
    await editTodo(carToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setcarToEdit({
      ...carToEdit,
      [name]: value,
      oilPercentage:
        ((carToEdit.newMilage - carToEdit.currentMilage) /
          (carToEdit.newMilage - carToEdit.changeOilNow)) *
        100,
    });
  };

  const handleDeletecar = async (id) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={car.id}>
      <td className="w-full">{car.text},{" "}{car.profile} </td>
      <td className="w-full">{car.newMilage} </td>
      <td className="w-full">{car.currentMilage} </td>
      <td className="w-full">{car.changeOilNow} </td>
      <td className="flex gap-5">
        <BarChart data={data} />
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor={"pointer"}
          className="text-blue-500"
          size={25}
        />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit Car/memo</h3>
            <section className="modal-action">
              <input
                value={carToEdit.text}
                name="text"
                onChange={handleChange}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <input
                value={carToEdit.newMilage}
                name="newMilage"
                onChange={handleChange}
                type="number"
                placeholder="new oil change milage"
                className="input input-bordered w-full"
              />
              <input
                value={carToEdit.currentMilage}
                name="currentMilage"
                onChange={handleChange}
                type="number"
                placeholder="current milage"
                className="input input-bordered w-full"
              />
              <input
                value={carToEdit.changeOilNow}
                name="changeOilNow"
                onChange={handleChange}
                type="number"
                placeholder="Milage when to change oil"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn" onClick={handleChange}>
                Submit
              </button>
            </section>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor={"pointer"}
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className="text-lg">Are you sure, you want to delete car?</h3>
          <button onClick={() => handleDeletecar(car.id)} className="btn">
            yes
          </button>
       
        </Modal>
      </td>
    </tr>
  );
};

export default Task;`}
          </code>
        </pre>
        <CodeHighlight />
    </div>    
     );
}
 
export default OilLifeCode;