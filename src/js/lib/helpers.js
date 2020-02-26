/* eslint-disable max-len */
/**
 * @function fetchApi
 * @returns {Promise}
 */
export async function fetchApi({
  uri,
  method = 'GET',
  headers = {},
  queryParams = {},
  body
}) {
  const url = new URL(uri);

  Object.keys(queryParams)
    .forEach(key =>
      url.searchParams.append(key, queryParams[key])
    );

  body = body ? JSON.stringify(body) : body;

  return fetch(url, { method, headers, body })
    .then(async response => {
      if (response.status === 200) { return response.json(); }
      throw new Error(`Bad status code ${response.status}`);
    })
    .then(responseObj => responseObj)
    .catch(error => {
      console.error('Error:', error);
    });
}

/**
 * @function getAvatarUrl
 * @param {object} queryParams
 * @returns {string} - url
 */
export function getAvatarUrl(queryParams) {
  try {
    const url = new URL('https://ui-avatars.com/api/');

    Object.keys(queryParams).forEach(key => {
      url.searchParams.append(key, queryParams[key]);
    });

    return url;
  } catch (error) {
    console.error('There was an error while getting the Avatar.');
    console.error(error);
    return null;
  }
}

/**
 * @function groupMessages - group users messages that were sent separated in short period of time
 * @param {Array} messages
 * @returns {Array} - Grouped messages
 */
export function groupMessages(messages) {
  return function() {
    return messages.reduce((prev, curr, index) => {
      const lastMessage = prev.slice(0).pop();
      if (
        lastMessage &&
        lastMessage.username === curr.username &&
        (new Date(curr.time).getTime() - new Date(lastMessage.time).getTime()) < 300000 // 5 minutes
      ) {
        prev[index - 1].text += `\n${curr.text}`;
      } else {
        prev.push(curr);
      }
      return prev;
    }, []);
  };
}

/**
 * @function getHoursMinutesFormat - returns string representing hours and minutes of a date in 12 hours format
 * @param {string} dateString
 * @returns {string}
 */
export function getHoursMinutesFormat(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const meridiem = hours > 12 ? 'pm' : 'am';
  return `${hours > 12 ? (hours - 12) : hours}:${date.getMinutes()} ${meridiem}`;
}

/**
 * @function canBeGrouped - compares two messages and returns wether they can be grouped or not
 * @param {Object} lastMessage
 * @param {Object} message
 * @returns {Boolean}
 */
export function canBeGrouped(lastMessage, message) {
  return (
    lastMessage &&
    lastMessage.username === message.username &&
    (new Date(message.time).getTime() - new Date(lastMessage.time).getTime()) < 300000 // 5 minutes
  );
}

/**
 * returns new array of messages ready to be looped and rendered. this is for 'setMessages' useState setter.
 * @param {Object} message - new incoming message
 * @returns {Function}
 */
export const cbSetMessages = message => messages => {
  const lastMessage = message.slice(0).pop();
  if (canBeGrouped(lastMessage, message)) {
    lastMessage.text += `\n${message.text}`;
    return [...messages.slice(0, -1), lastMessage];
  } else {
    message.parsedDate = getHoursMinutesFormat(message.time);
    return [...messages, message];
  }
};
