// components/MyImage.js
import Image from 'next/image';
import PropTypes from 'prop-types';

interface ImagemProps {
  src: string;
  alt: string;
  className: any;
  width: number;
  height: number;
}

const Imagem: React.FC<ImagemProps> = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

Imagem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Imagem;
