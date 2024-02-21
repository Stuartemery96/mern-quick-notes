import { checkToken } from "../../utilities/users-service";

export default function AuthPage() {
  async function hanldeCheckTonen() {
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={hanldeCheckTonen}>Check When My Login Expires</button>
    </>
  );
}
