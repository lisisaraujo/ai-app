import { Form } from "@/form/Form";
import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("");
  console.log(output);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const question = form.question.value;
    console.log(question);

    async function callApi() {
      // retrieve the values from the form
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (!data) {
        setOutput("Waiting");
        return;
      }

      const output = data.output;

      setOutput(output);
    }
    callApi();
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <p>{output}</p>
    </>
  );
}
