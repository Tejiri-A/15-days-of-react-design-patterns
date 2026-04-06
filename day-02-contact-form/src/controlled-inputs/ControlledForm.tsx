import { useState, type ChangeEvent } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

type FormField = {
  value: string;
  error: string;
};

type FormState = {
  name: FormField;
  email: FormField;
  message: FormField;
};

function ControlledForm() {
  const [formState, setFormState] = useState<FormState>({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: { value, error: "" }, // Clearing error when user types
    }));
  };

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const nextState = { ...formState };
    let hasError = false;

    // Name Validation
    if (name.trim() === "") {
      nextState.name = { value: name, error: "Cannot be empty" };
      hasError = true;
    } else if (name.trim().length < 3) {
      nextState.name = { value: name, error: "Name must be at least 3 characters" };
      hasError = true;
    } else {
      nextState.name = { value: name, error: "" };
    }

    // Email Validation (simple check)
    if (email.trim() === "") {
      nextState.email = { value: email, error: "Email is required" };
      hasError = true;
    } else if (!email.includes("@")) {
      nextState.email = { value: email, error: "Invalid email address" };
      hasError = true;
    } else {
      nextState.email = { value: email, error: "" };
    }

    // Message Validation
    if (message.trim().length < 10) {
      nextState.message = { value: message, error: "Message should be at least 10 characters" };
      hasError = true;
    } else {
      nextState.message = { value: message, error: "" };
    }

    setFormState(nextState);

    if (hasError) return;

    // Submit successful
    console.log("Form Submitted:", { name, email, message });
    alert("Thank you! Your message has been sent.");
    
    // Optional: Reset form
    setFormState({
      name: { value: "", error: "" },
      email: { value: "", error: "" },
      message: { value: "", error: "" },
    });
  };

  return (
    <form className="card shadow-base-200 p-8 space-y-6" action={handleSubmit}>
      <div className="card-title">
        <h1 className="text-2xl font-bold">We'd love to hear from you!</h1>
      </div>
      <div className="card-body p-0 space-y-4">
        <Input
          label="Full name"
          name="name"
          value={formState.name.value}
          onChange={handleChange}
          errorMessage={formState.name.error}
          required={false}
        />
        <Input
          label="Email address"
          name="email"
          value={formState.email.value}
          onChange={handleChange}
          errorMessage={formState.email.error}
          type="email"
        />
        <TextArea
          label="Message"
          name="message"
          onChange={handleChange}
          value={formState.message.value}
          errorMessage={formState.message.error}
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ControlledForm;
