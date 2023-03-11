export const state = () => ({
  menu: {},
  footer: {},
  header: {},
  page: {},
  lang: {
    current: "ru",
    other: null,
  },
});

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu;
  },
  SET_HEADER(state, header) {
    state.header = header;
  },
  SET_FOOTER(state, footer) {
    state.footer = footer;
  },
  SET_ERROR(state, error) {
    state.menu = error;
  },
  SET_PAGE(state, page) {
    state.page = page;
  },
  SET_LANG_CURRENT(state, lang) {
    state.lang.current = lang;
  },
  SET_LANG_OTHER(state, lang) {
    state.lang.other = lang;
  },
};

export const actions = {
  async fetchMenu({
    commit,
    state
  }, params) {
    const lang = params.params.lang ?
      params.params.lang :
      state.lang.current ?
      state.lang.current.lang :
      "ru";
    try {
      const menu = (
        await params.api.api.getSingle("menu", {
          lang: lang,
        })
      ).data;

      commit("SET_MENU", menu);
    } catch (e) {
      const error = "Please create a menu document";

      commit("SET_ERROR", error);
    }
  },
  async fetchHeader({
    commit,
    state
  }, params) {
    const lang = params.params.lang ?
      params.params.lang :
      state.lang.current ?
      state.lang.current.lang :
      "ru";
    const header = (
      await params.api.api.getSingle("header", {
        lang: lang,
      })
    ).data;

    commit("SET_HEADER", header);
  },
  async fetchFooter({
    commit,
    state
  }, params) {
    const lang = params.params.lang ?
      params.params.lang :
      state.lang.current ?
      state.lang.current.lang :
      "ru";
    const footer = (
      await params.api.api.getSingle("footer", {
        lang: lang,
      })
    ).data;
    commit("SET_FOOTER", footer);
  },
};
