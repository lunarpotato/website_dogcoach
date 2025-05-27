import Styles from "../StepsAnimation/StepsAnimation.module.css";

export default function Steps() {
  //   return <img className={Styles.printwalk} src="./img/printwalk.svg"></img>;

  return (
    <div className="steps-container">
      <svg
        viewBox="0 0 200 100"
        className="steps"
        xmlns="../img/printwalk.svg"
      ></svg>
    </div>
  );
}
