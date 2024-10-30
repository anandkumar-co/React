import { useParams } from "react-router-dom";
function User() {
  const { Userid } = useParams();
  return (
    <div className="text-center bg-yellow-200 py-5 rounded-3xl">
      User:{Userid}
    </div>
  );
}

export default User;
