import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

type FormError = {
  errorMessage: string;
};

type FormState = {
  name: FormError;
  email: FormError;
  message: FormError;
};

// 1. Standalone validation logic
const validate = (name: string, value: string): string => {
  if (name === "name") {
    if (!value.trim().length) return "Name cannot be empty";
    if (value.trim().length < 3)
      return "Name cannot be less than three characters";
  }

  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim().length) return "Email cannot be empty";
    if (!emailRegex.test(value)) return "Invalid email address";
  }

  if (name === "message") {
    if (value.trim().length < 10)
      return "Message should be at least 10 characters";
  }

  return "";
};

function UncontrolledInputs() {
  const [formError, setFormError] = useState<FormState>({
    name: { errorMessage: "" },
    email: { errorMessage: "" },
    message: { errorMessage: "" },
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // 2. Validate on focus loss (Blur)
  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validate(name, value);
    setFormError((prev) => ({
      ...prev,
      [name]: { errorMessage: error },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameValue = nameRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const messageValue = messageRef.current?.value || "";

    // 3. Reuse validation for Submit
    const nameError = validate("name", nameValue);
    const emailError = validate("email", emailValue);
    const messageError = validate("message", messageValue);

    const nextState: FormState = {
      name: { errorMessage: nameError },
      email: { errorMessage: emailError },
      message: { errorMessage: messageError },
    };

    setFormError(nextState);

    // Focus high-priority errors
    if (nameError) return nameRef.current?.focus();
    if (emailError) return emailRef.current?.focus();
    if (messageError) return messageRef.current?.focus();

    console.log("Success:", { nameValue, emailValue, messageValue });
  };

  return (
    <form
      className="card shadow-base-200 p-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="card-title">
        <h1 className="text-2xl font-bold">We'd love to hear from you!</h1>
      </div>
      <div className="card-body p-0 space-y-4">
        <Input
          label="Full name"
          name="name"
          onBlur={handleBlur} // Validate on Blur
          errorMessage={formError.name.errorMessage} // Using state!
          ref={nameRef}
        />
        <Input
          label="Email address"
          name="email"
          onBlur={handleBlur}
          errorMessage={formError.email.errorMessage}
          type="email"
          ref={emailRef}
        />
        <TextArea
          label="Message"
          name="message"
          onBlur={handleBlur}
          errorMessage={formError.message.errorMessage}
          ref={messageRef}
         
        />
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UncontrolledInputs;
