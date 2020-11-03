export const home = async (req, res) => {
  try {
    res.render("home", { pageTitle: "home"});
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "home"});
  }
};