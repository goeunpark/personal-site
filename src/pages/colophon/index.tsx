import type { NextPage } from "next";
import styles from "./colophon.module.scss";
import Layout from "../../components/Layout";

const Colophon: NextPage = () => {
  return (
    <Layout>
      <div className={styles.index}>
        <h1 className={styles.colophonHeader}>colophon</h1>
        <div className={styles.textBlock}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          lacinia ipsum auctor, iaculis nunc quis, congue enim. Praesent
          dignissim convallis felis, ut euismod libero molestie eu. Nulla
          posuere bibendum odio sit amet faucibus. Integer nisl mauris, tempor
          quis pharetra porta, fringilla rutrum enim. Aliquam aliquam mauris et
          aliquet lacinia. Pellentesque quis aliquam nisl. Donec in laoreet
          nunc, at tempor enim. Fusce molestie, ex id vulputate fringilla, felis
          nibh pretium ex, non tempus mi ante pellentesque orci. Sed at dapibus
          nibh. Phasellus libero est, viverra eget maximus euismod, lacinia a
          tellus. Fusce et venenatis eros. Sed pulvinar mattis mauris, sed
          laoreet massa condimentum ac. Vestibulum cursus eros nunc, sagittis
          bibendum turpis mollis et. Donec eu felis vitae libero varius viverra
          faucibus ut urna. Mauris efficitur, quam ut pharetra commodo, erat
          felis lacinia elit, aliquam feugiat dolor justo et sem. Aliquam semper
          mauris sit amet felis luctus suscipit sit amet condimentum metus.
          Etiam in justo vitae mi condimentum pretium. Vivamus sollicitudin,
          mauris blandit tempus tincidunt, justo quam venenatis lectus, vel
          dapibus diam felis malesuada tellus. Morbi at eleifend massa. Morbi
          nec convallis felis. Quisque egestas tempor lacus sit amet rhoncus.
          Pellentesque feugiat, augue et viverra porta, quam nunc imperdiet mi,
          et hendrerit diam risus a enim. Vestibulum ultricies fermentum sapien,
          sit amet convallis mi hendrerit ut. Aliquam pulvinar nibh nisi, in
          scelerisque arcu malesuada sed. Vivamus iaculis augue quis elit
          consequat luctus. Cras finibus dolor ligula, sed sollicitudin magna
          vulputate vel. Fusce id aliquam elit, vitae fermentum elit. Cras
          semper ultrices tortor id hendrerit. Praesent dictum non turpis vitae
          mollis. Sed imperdiet laoreet tristique. Sed nec vestibulum arcu.
          Aliquam facilisis leo orci, dignissim commodo massa porta ac.
          Suspendisse id gravida nunc, vulputate tristique mauris. Praesent
          volutpat sapien id diam convallis aliquam. Nulla eros ligula, feugiat
          quis condimentum eu, facilisis auctor lacus. Vestibulum quis diam non
          nibh rutrum vestibulum. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Nunc erat justo, ultrices id turpis eu, blandit feugiat
          erat. Duis et lectus sapien. Morbi luctus lobortis lorem ut
          vestibulum. Aenean sit amet ex elementum, laoreet libero sit amet,
          sagittis sem. Integer pharetra enim enim, ac ornare arcu congue a. In
          eu viverra purus, ut accumsan tellus. Suspendisse suscipit turpis id
          accumsan consectetur.
        </div>
      </div>
    </Layout>
  );
};

export default Colophon;
