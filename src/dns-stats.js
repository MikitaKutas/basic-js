const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
      return {}
  }

  const localeIndex = domains[0].lastIndexOf('.');
  const locale = domains[0].slice(localeIndex);
  const org = domains[0].slice(0, localeIndex);

  let stats = {
      [locale]: domains.length,
      [locale + '.' + org]: domains.length,
  }

  if (domains.length > 1) {
      for (let i = 1; i < domains.length; i += 1) {
          const service = domains[i].slice(0, domains[i].indexOf('.'));

          stats[locale + '.' + org + '.' + service] = 1;
      }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
