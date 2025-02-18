import Image from "next/image";
import '../styles/Deal.css'
import Deal from '../../public/deal.webp'

export default function DealOfTheWeek() {
    return (
        <div className="dw-wrap">
        <div className="dw-img">
          <Image src={Deal} alt="Car Deal of the Week" />
        </div>
        <div className="dw-info">
          <h5 className="decore-title">Deal Of The Week</h5>
          <h3>
            Mercedes <span>Rent For $500 / Day</span>
          </h3>
          <div className="dw-text">
            Make/Model: Mercedes-Benz E-Class Series | Type/Year: Mercedes-Benz E-Class Series 2023 | Engine: 3.0L Turbocharged Inline-6 | Seats: 5 | Luggage Capacity: 3 Bags
          </div>
          <div className="dw-footer">
            <i className="fas fa-phone-square"></i> Call to Book: <strong>+1 755 302 8549</strong>
          </div>
        </div>
      </div>
  );
}
