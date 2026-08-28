/**
 * الخزانة — serve the static hub and every /slug/ from this repo.
 * Official URL: https://khazana.alhajda.com
 */

export default {
  /**
   * @param {Request} request
   * @param {{ ASSETS: { fetch: typeof fetch } }} env
   */
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
