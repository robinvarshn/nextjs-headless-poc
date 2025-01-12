import Ratings from "components/ratings";
import Seo from "components/seo";
import Teaser from "components/teaser";
import Text from "components/text";
import React from "react";

export default function PDetails({ productDetails = {} }) {
  const {
    bannerUrl = "",
    title = "",
    lngDescription = "",
    rating = "",
  } = productDetails;
  const teaserData = {
    imageURL: bannerUrl,
  };

  const textHeaderData = {
    description: title,
    variation: "text--variation1",
  };

  const textDescriptionData = {
    description: lngDescription,
    variation: "text--variation2",
  };

  return (
    <React.Fragment>
      <Seo pageTitle={title} />
      <Teaser teaserData={teaserData} />
      <Text text={textHeaderData} />
      <Text text={textDescriptionData} />
      <Ratings rating={rating} />
    </React.Fragment>
  );
}
