# Controlled vs Uncontrolled Components in React

This project demonstrates two different approaches to handling form inputs: **Controlled** and **Uncontrolled**.

## Comparison Table

| Feature | Controlled Components | Uncontrolled Components |
| :--- | :--- | :--- |
| **Code Style** | "React-first." Values are kept in React state and synced with DOM. | "DOM-first." Values are kept in the DOM and pulled into React when needed. |
| **Data Flow** | One-way: state $\rightarrow$ value prop $\rightarrow$ onChange $\rightarrow$ state. | Direct: DOM $\rightarrow$ ref.current.value. |
| **Validation** | Real-time. Validation logic can run on every keystroke. | Point-in-time. Validation usually runs on `Blur` or `Submit`. |
| **Reset** | Easy. Simply update the state back to initial values. | Moderate. Requires `form.reset()` or manually clearing each ref. |
| **Readability** | Declarative. The UI reflects the state directly. | Imperative. Requires logic to "pull" values from the DOM. |
| **Complexity** | Higher setup. Requires state and change handlers for every field. | Lower setup. Requires refs but fewer handlers for basic usage. |
| **Performance** | Can be lower for very large forms (re-renders on every key). | Generally higher for large forms (no re-renders on typing). |

---

## Detailed Breakdown

### 1. Code Styles
- **Controlled:** Requires `useState` or a state management library. Every input field is wired to a piece of state and an `onChange` handler.
- **Uncontrolled:** Relies on `useRef`. You define a reference for each input and access it only when needed (e.g., inside `handleSubmit`).

### 2. Validation
- **Controlled:** Excellent for real-time feedback (e.g., "password too short" as you type). Since the state is updated on every keystroke, the UI can React instantly.
- **Uncontrolled:** Best for validation on `Blur` or `Submit`. Validating on every keystroke requires adding `onChange` handlers, which essentially turns them into controlled-like inputs.

### 3. Resetting the Form
- **Controlled:** Very straightforward. Updating your `formState` back to empty strings will automatically clear all inputs because their `value` props are tied to that state.
- **Uncontrolled:** You can use the native HTML `form.reset()` method, or you have to manually clear each field using `ref.current.value = ""`.

### 4. Readability
- **Controlled:** More "React-like." The source of truth is always the state. It's easier to reason about the current value of the form by looking at the state object.
- **Uncontrolled:** Can become "messy" with many refs. However, for simple forms, the logic is often more concise as you don't need to write change handlers for every field.

### 5. Complexity
- **Controlled:** Becomes complex as the form grows. You often end up with complex state objects or specialized hooks like `useForm`.
- **Uncontrolled:** Stays relatively simple for submission-only forms, but complexity spikes if you need advanced features like conditional logic based on input values or complex real-time validation.

## Conclusion
Use **Controlled Components** when you need:
- Real-time validation
- Conditional UI based on input (e.g., show/hide fields)
- Specific format enforcement (e.g., credit card masking)

Use **Uncontrolled Components** when:
- You need a simple form with minimal complexity
- You are integrating with non-React libraries
- Performance is a major concern for a massive form with many fields
