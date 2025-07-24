import '../style/mystyle.css'; // ✅ Correct path

const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + "%";
};
const calScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1>
      <font color="Brown">Student details</font>
    </h1>
    <div className="Name">
      <b>
        <span>Name : </span>
      </b>
      <span>{Name}</span>
    </div>
    <div className="School">
      <b>
        <span>School : </span>
      </b>
      <span>{School}</span>
    </div>
    <div className="Total">
      <b>
        <span>Total : </span>
      </b>
      <span>{total}</span>
      <span>Marks</span>
    </div>
    <div>
      <b>Score :</b>
      <span>{calScore(total, goal)}</span>
    </div>
  </div>
);
