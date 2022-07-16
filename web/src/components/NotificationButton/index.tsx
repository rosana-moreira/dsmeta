import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";
type Props = {
  saleId: number;
};
export function NotificationButton({ saleId }: Props) {
  function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
      console.log("Sussa");
    });
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}
