/* eslint-disable react/prop-types */

const ToggleButton = ({ handleToggleForm, toggleForm }) => {
  const handleClickTrue = () => {
    handleToggleForm(true);
    // console.log('true')
  };

  const handleClickFalse = () => {
    handleToggleForm(false);
    // console.log('false')
  };

  const styledTrue = "col-6 text-center border border-bottom-0 p-3 bg-white";
  const styledFalse =
    "col-6 text-center border border-top-0 border-end-0 border-start-0 p-3 bg-white";

  return (
    <div className="row my-5">
      <div className="col-md-6 col m-auto">
        <button
          type="button"
          className={toggleForm ? styledTrue : styledFalse}
          onClick={handleClickTrue}
        >
          Personal
        </button>
        <button
          type="button"
          className={toggleForm ? styledFalse : styledTrue}
          onClick={handleClickFalse}
        >
          Agencia
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
