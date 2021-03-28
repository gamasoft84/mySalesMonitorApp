import { DetailTypeKMM } from './DetailTypeKMM';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <DetailTypeKMM name={name}></DetailTypeKMM>
    </div>
  );
};

export default ExploreContainer;
