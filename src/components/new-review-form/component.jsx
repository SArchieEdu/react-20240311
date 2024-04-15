import { useState } from "react";
import { Button } from "../button/component";
import { useCreateReviewMutation } from "../../redux/service/api";

export const NewReviewForm = ({ headphoneId }) => {
  const [text, setText] = useState("");

  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <div>SAving...</div>;
  }

  return (
    <div>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <Button
        onClick={() => {
          setText("");
          createReview({
            productId: headphoneId,
            newReview: {
              user: "hr83h29h9h9u12h9213",
              text,
              rating: 3,
            },
          });
        }}
      >
        CreateReview
      </Button>
    </div>
  );
};
