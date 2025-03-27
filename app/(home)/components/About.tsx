import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold mt-2 text-blue-400 text-center">
        About Me
      </h1>
      <div className="flex flex-row justify-center items-center gap-20">
        <Image src="/profile2.png" alt="" width={300} height={400} />

        <div className="flex flex-wrap max-w-[55rem]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            pariatur, enim voluptatibus a quae provident ipsum corporis officia
            non. Unde, nostrum maxime distinctio laborum iure minus! Velit ut
            nobis ipsa iusto modi natus id ad at nihil magnam, repellat, est
            labore pariatur ea deleniti aliquam fuga sapiente omnis facere
            excepturi nemo itaque earum consectetur. Qui reiciendis nobis id sit
            voluptate repellendus quia doloremque vel laborum inventore magni
            odit, ad illo soluta eum saepe autem, officia fuga praesentium omnis
            neque ut vitae animi at. Debitis qui magni minus cum quo laboriosam
            mollitia corrupti, quibusdam vero officia ex nulla id, temporibus
            minima!
          </p>
        </div>
      </div>
    </div>
  );
}
