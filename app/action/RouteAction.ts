export const MODIFY_BOOTH = "MODIFY_BOOTH"

export const modifyBooth = (booth) => {
  return {
    type: MODIFY_BOOTH,
    payload: {
      booth
    }
  }
}
