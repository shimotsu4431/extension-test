import { useFieldExtension } from "microcms-field-extension-react";
import { useEffect } from "react";

export default function TextField() {

  const { data, sendMessage } = useFieldExtension("", {
    origin: "https://eught07u9c.microcms.io",
  });

  useEffect(() => {
    console.log(data)
  },[data])

  const handleInputChange = (e) => {
    sendMessage({ id: "text", data: e.target.value })
    console.log("text", e.target.value)
  };

  return (
    <>
      <input type="text" value={data} onChange={handleInputChange} />
    </>);
}