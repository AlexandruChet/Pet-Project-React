import {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type JSX,
} from "react";

interface FormProps {
  PORTNUM: string;
  passwordText: string;
  emailText: string;
  nickNameText: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
}

const FormUI: React.FC<FormProps> = ({
  PORTNUM,
  passwordText,
  emailText,
  nickNameText,
}): JSX.Element => {
  const [auth, setIsAuth] = useState<boolean>(false);

  const [formBody, setFormBody] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const toggleAuth = (): void => setIsAuth((prev) => !prev);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormBody((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, password } = formBody;
    const isFormValid =
      name.trim() !== "" && /\S+@\S+\.\S+/.test(email) && password.length >= 6;
    setIsValid(isFormValid);
    console.log("Form valid:", isFormValid);
    return isFormValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      alert("❌ Please fill in all fields correctly!");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:${PORTNUM}/submit-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            name: formBody.name,
            email: formBody.email,
            password: formBody.password,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send password");

      const data = await response.json();
      console.log("✅ Server response:", data);
      alert("✅ Data sent successfully!");
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err.message);
      else console.error("Unknown error", err);
    }
  };

  useEffect(() => {
    console.log("Form data updated:", formBody);
  }, [formBody]);

  return (
    <form onSubmit={handleSubmit}>
      {auth === false && (
        <div>
          <h2>Registration</h2>

          <label htmlFor="name">{nickNameText}</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your nickname"
            value={formBody.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{emailText}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formBody.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">{passwordText}</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formBody.password}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {auth === true && (
        <div>
          <h2>Authorization</h2>

          <label htmlFor="email">{emailText}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formBody.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">{passwordText}</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formBody.password}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <button type="submit">Submit</button>

      <button type="button" onClick={toggleAuth}>
        Switch to {auth ? "Registration" : "Auth"}
      </button>
    </form>
  );
};

export default FormUI;
