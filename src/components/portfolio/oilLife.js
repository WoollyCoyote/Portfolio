"use client";
import { useState } from "react";
import CodeHighlight from "./codehighlight";
import Image from "next/image";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";

export default function oilLife() {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="card oilAppBox">
      <h2 className="title">Oil Life</h2>
      <h4 className="subTitle">
        NEXT.JS CRUD APP with a seperate JSON server for backend Data
      </h4>


      <div className="oilImgandDis center">
        {showCode ? (
        <div className="card  codeBox">
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
      ):

        <Image
          className="oilAppImg"
          src="/oillifescreenshotv1.png"
          width={500}
          height={500}
          alt="Project screen shot"
        />
      }

        <p className="oilAppDiscription">
          Oil tracking app is for keeping a log of each of you're vehicles
          current oil use and when to change oil. The Data is stored with a Json
          server running on *Render.com* and the front end is deployed on vercel
        </p>
        <div className="Oillinks center">
            <button onClick={() => setShowCode(!showCode)}>{showCode ?  "Show Picture":"Show Code" }</button>
          <div className="oilLinkLive">
            <Link href="https://nextcrud-sage.vercel.app">Deployed on</Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 353 64"
            >
              <path
                fill="white"
                d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"
              />
            </svg>
          </div>
          <div id="githubLink" className="oilLinkGit">
            <FaGithubAlt />
            <Link href="https://github.com/WoollyCoyote/nextcrud.git">
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
