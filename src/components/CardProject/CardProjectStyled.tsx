import styled from "styled-components";

export const CardProjectStyled = styled.div`
  text-transform: uppercase;
  h4 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }

  .portfolio-card {
    display: block;
    position: relative;
    overflow: hidden;
    gap: 1rem;

    .portfolio-card-img {
      width: 100%;
    }

    .portfolio-card-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      visibility: hidden;
      opacity: 0;
      background-image: -webkit-linear-gradient(
        bottom,
        #e1dfed 0%,
        rgba(223, 224, 237, 0.7) 99%,
        rgba(223, 223, 237, 0.8) 100%
      );
      background-image: linear-gradient(
        to top,
        #e1dfed 0%,
        rgba(223, 224, 237, 0.7) 99%,
        rgba(223, 223, 237, 0.8) 100%
      );
      -webkit-transition: all, 0.3s;
      transition: all, 0.3s;
      width: 0;
      height: 0;
      border-radius: 50%;
      overflow: hidden;

      .portfolio-card-caption {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 100%;
      }
    }

    &:hover {
      .portfolio-card-overlay {
        opacity: 1;
        visibility: visible;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }

    @media (max-width: 767.98px) {
      margin-bottom: 30px;
    }

    .portfolio-card {
      margin-bottom: 30px;
    }

    .service-card {
      margin-bottom: 30px;
    }
  }

  .img-responsive {
    width: 100% !important;
  }

  .rounded {
    border-radius: 4px;
  }
  img {
    width: 350px;
  }
`;
