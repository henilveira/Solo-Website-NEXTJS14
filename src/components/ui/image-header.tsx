// components/ui/image-header.js
import Image from 'next/image';
import PropTypes from 'prop-types';

interface ImagemProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Imagem: React.FC<ImagemProps> = ({ src, alt = '', width = 1920, height = 1080, className }) => {
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
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Imagem.defaultProps = {
  alt: '',
  width: 1920,
  height: 1080,
};

export default Imagem;
