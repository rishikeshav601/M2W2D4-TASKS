import React, { useState, useEffect } from "react";

// 1. Simple counter sync
function CounterChild({ count, setCount }) {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
function CounterSync() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterChild count={count} setCount={setCount} />
      <CounterChild count={count} setCount={setCount} />
    </div>
  );
}

// 2. Input mirroring
function InputChild({ value, setValue }) {
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
function DisplayChild({ value }) {
  return <p>{value}</p>;
}
function InputMirroring() {
  const [text, setText] = useState("");
  return (
    <div>
      <InputChild value={text} setValue={setText} />
      <DisplayChild value={text} />
    </div>
  );
}

// 3. Temperature converter
function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsius = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit(c ? (c * 9) / 5 + 32 : "");
  };

  const handleFahrenheit = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(f ? ((f - 32) * 5) / 9 : "");
  };

  return (
    <div>
      <input placeholder="Celsius" value={celsius} onChange={handleCelsius} />
      <input placeholder="Fahrenheit" value={fahrenheit} onChange={handleFahrenheit} />
    </div>
  );
}

// 4. Form inputs in children
function NameInput({ name, setName }) {
  return <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />;
}
function EmailInput({ email, setEmail }) {
  return <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />;
}
function FormInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <NameInput name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
      <p>{name} - {email}</p>
    </div>
  );
}


// 5. Checkbox control
function CheckboxControl() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <button disabled={!checked}>Click Me</button>
    </div>
  );
}

// 6. Sibling communication
function MessageInput({ setMessage }) {
  return <input onChange={(e) => setMessage(e.target.value)} />;
}
function MessageDisplay({ message }) {
  return <p>{message}</p>;
}
function SiblingCommunication() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <MessageInput setMessage={setMessage} />
      <MessageDisplay message={message} />
    </div>
  );
}

// 7. Shared toggle
function ToggleButton({ toggle, setToggle }) {
  return <button onClick={() => setToggle(!toggle)}>Toggle</button>;
}
function ToggleContent({ toggle }) {
  return toggle ? <p>You see me</p> : null;
}
function SharedToggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <ToggleButton toggle={toggle} setToggle={setToggle} />
      <ToggleContent toggle={toggle} />
    </div>
  );
}


// 8. Show/hide element
function ShowHide() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>This is visible</p>}
    </div>
  );
}

// 9. Login/logout button
function LoginLogout() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? "Logout" : "Login"}
    </button>
  );
}

// 10. Greeting based on time
function Greeting() {
  const hour = new Date().getHours();
  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  return <h3>{greeting}</h3>;
}

// 11. Role-based view
function RoleBasedView({ role }) {
  return role === "admin" ? <h3>Admin Dashboard</h3> : <h3>User Dashboard</h3>;
}

// 12. Conditional list message
function ConditionalList() {
  const [items] = useState([]);
  return (
    <div>
      {items.length === 0 ? <p>No items</p> : <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>}
    </div>
  );
}

// 13. Loading spinner
function LoadingSpinner() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Here is your data!");
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? "Loading..." : data}</div>;
}

// 14. Error message
function ErrorBox() {
  const [error] = useState(true);
  return error ? <div style={{ color: "red" }}>Error: Something went wrong!</div> : null;
}

// 15. Inline condition
function InlineCondition() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count % 2 === 0 ? "Even Number" : "Odd Number"}</p>
    </div>
  );
}



function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>M2W2D4 TASKS</h1>

      <h2>1. Simple counter sync</h2>
      <CounterSync />

      <h2>2. Input mirroring</h2>
      <InputMirroring />

      <h2>3. Temperature converter</h2>
      <TemperatureConverter />

      <h2>4. Form inputs in children</h2>
      <FormInputs />

      <h2>5. Checkbox control</h2>
      <CheckboxControl />

      <h2>6. Sibling communication</h2>
      <SiblingCommunication />

      <h2>7. Shared toggle</h2>
      <SharedToggle />

      <h2>8. Show/hide element</h2>
      <ShowHide />

      <h2>9. Login/logout button</h2>
      <LoginLogout />

      <h2>10. Greeting based on time</h2>
      <Greeting />

      <h2>11. Role-based view</h2>
      <RoleBasedView role="admin" />
      <RoleBasedView role="user" />

      <h2>12. Conditional list message</h2>
      <ConditionalList />

      <h2>13. Loading spinner</h2>
      <LoadingSpinner />

      <h2>14. Error message</h2>
      <ErrorBox />

      <h2>15. Inline condition</h2>
      <InlineCondition />

    </div>
  );
}


export default App;