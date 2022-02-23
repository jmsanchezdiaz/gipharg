import { GifType } from '../../types/interfaces';
import './Gif.scss';
import GifButtons from './GifButtons';

interface Props {
  gif: GifType;
}

const Gif: React.FC<Props> = ({ gif }) => {
  const { id, username: gifAlt, images, embed_url: gifLink } = gif;
  const url = images ? images.downsized.url : '';
  return (
    <div className='gif'>
      <div className='gif__image-container'>
        <a
          className='gif__effect'
          href={gifLink}
          rel='noreferrer'
          target='_blank'>
          See More
        </a>
        <img className='gif__image' src={url} alt={gifAlt} />
      </div>
      <GifButtons id={id} gif={gif} />
    </div>
  );
};

export default Gif;
