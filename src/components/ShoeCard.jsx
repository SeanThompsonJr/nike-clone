/* eslint-disable react/prop-types */
//imgUrl is each individual shoe object
//changBigShoeImage is a function
//bigShoeImg is the main shoe image that is being displayed
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  //if the bigShoeImg is not the imgUrl the user clicks on
  //then change the the bigShoeImg to be the one the user clicked on
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  // dynamic template string
  //allows us to put in logic to class names
  return (
    <div
      className={`border-2 rounded-xl
    ${
      //if the main img is equal to one of the little images then light up the currently selected img
      //ex if img1 is the same as the main img then img1 lights up
      bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
    } cursor-pointer max-sm: flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
