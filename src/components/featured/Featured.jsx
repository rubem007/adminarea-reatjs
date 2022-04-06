import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {

  const percentage = 66;

  return <div className="featured">
    <div className="top">
      <h1 className="title">Total Revenue</h1>
      <MoreVertIcon fontSize="small" />
    </div>
    <div className="bottom">
      <div className="featuredChart">
      <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={4} />;
      </div>
      <p className="title">Total sales made today</p>
      <p className="title">$425</p>
      <p className="title">Previous transactions processing. Last payments may not be included.</p>
      <div className="summary">
      <div className="item">
          <div className="itemTitle">Last Year</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon font-size="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowUp font-size="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon font-size="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Featured;