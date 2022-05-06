export const state = () => ({
  menu: {},
  footer: {},
  header: {},
  page: {},
  lang: {
    current: en-us,
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
  async fetchMenu({ commit }, $prismic) {
    try {
      const menu = (await $prismic.api.getSingle("menu")).data;

      commit("SET_MENU", menu);
    } catch (e) {
      const error = "Please create a menu document";

      commit("SET_ERROR", error);
    }
  },
  async fetchHeader({ commit }, $prismic) {
    const header = (await $prismic.api.getSingle("header")).data;

    commit("SET_HEADER", header);
  },
  async fetchFooter({ commit }, $prismic) {
    const footer = (await $prismic.api.getSingle("footer")).data;
    commit("SET_FOOTER", footer);
  },
  async fetchPage({ commit }, $prismic) {
    const footer = (await $prismic.api.getSingle("footer")).data;
    commit("SET_FOOTER", footer);
  },
};
