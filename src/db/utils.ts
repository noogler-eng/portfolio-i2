import cacheClass from "./cache";
import firestore from "./firebase.config";
import { doc, getDoc } from "firebase/firestore";

const getProjects = async () => {
  const cache = cacheClass.getInstance();
  const cachedProjects = (await cache.get("projects")) || [];

  if (cachedProjects?.length > 0) {
    console.log("we have hit the cache");
    return cachedProjects;
  }

  const docRef = doc(firestore, "projects");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("we have to push this data to cache");
    const projectData = docSnap.data();
    await cache.set("projects", JSON.stringify(projectData), 0);
    return projectData;
  } else {
    console.log("No such document!");
  }
};

const myBlogs = async () => {
  const cache = cacheClass.getInstance();
  const cachedBlogs = (await cache.get("blogs")) || [];

  if (cachedBlogs?.length > 0) {
    console.log("we have hit the cache");
    return cachedBlogs;
  }

  const docRef = doc(firestore, "blogs");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("we have to push this data to cache");
    const blogsData = docSnap.data();
    await cache.set("projects", JSON.stringify(blogsData), 0);
    return blogsData;
  } else {
    console.log("No such document!");
  }
};

const myImages = async () => {
  const cache = cacheClass.getInstance();
  const cachedImages = (await cache.get("images")) || [];

  if (cachedImages?.length > 0) {
    console.log("we have hit the cache");
    return cachedImages;
  }

  const docRef = doc(firestore, "images");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("we have to push this data to cache");
    const imagesData = docSnap.data();
    await cache.set("images", JSON.stringify(imagesData), 0);
    return imagesData;
  } else {
    console.log("No such document!");
  }
};

export { getProjects, myBlogs, myImages };
