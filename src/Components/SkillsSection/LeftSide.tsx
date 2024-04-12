import { Html } from '@react-three/drei'

interface IProps {
  rotation: any,
  position: any
}

export const LeftSideCube: React.FC<IProps> = ({ rotation, position }) => {
  return (
    <Html rotation={rotation} position={position}>
      <div className={'title'}>
        <span className={'slogan'}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit accusantium assumenda quas explicabo harum nisi modi commodi corrupti. Nesciunt doloribus delectus ratione fuga ut alias culpa. In tempora explicabo odio, libero nesciunt quae. Quos earum laboriosam laudantium. Facilis consequatur qui quibusdam laborum natus, sint obcaecati dolor, libero voluptate provident quaerat.
        </span>
      </div>
    </Html>
  );
}