import * as THREE from "three";

/**
 * Round photo cutouts of the menu (public/dishes). Each one is a flat disc that faces the
 * camera and turns like a plate on a table. Photos from Pexels, see the footnote on the page.
 */
export type Dish = {
  object: THREE.Group;
  dispose: () => void;
};

/** A photo on a disc of radius 1. The material ignores fog and lights so the photo shows as shot. */
export function makePhotoDish(src: string): Dish {
  const geo = new THREE.CircleGeometry(1, 96);
  const tex = new THREE.TextureLoader().load(src);
  tex.anisotropy = 8;
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    side: THREE.DoubleSide,
    fog: false,
    toneMapped: false,
  });
  // A dark disc behind the photo gives a little edge and stops the back side from showing through
  const backMat = new THREE.MeshBasicMaterial({ color: 0x120a06, fog: false });
  const back = new THREE.Mesh(geo, backMat);
  back.scale.setScalar(1.02);
  back.position.z = -0.02;
  const photo = new THREE.Mesh(geo, mat);
  const object = new THREE.Group();
  object.add(back, photo);
  return {
    object,
    dispose() {
      geo.dispose();
      tex.dispose();
      mat.dispose();
      backMat.dispose();
    },
  };
}
