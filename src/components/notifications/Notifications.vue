<template>
  <div class="notifications">
    <div class="notifications__container">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notifications__notification primary white--text px-3 py-6 elevation-16 d-flex align-center mt-2"
      >
        <div class="notifications__icon-container px-3">
          <v-icon :class="getIconClassByType(notification.type)">
            {{ notification.icon || getIconNameByType(notification.type) }}
          </v-icon>
        </div>

        <div
          class="notifications__message px-2"
          v-html="notification.message"
        />

        <div
          v-if="notification.canDismiss"
          class="notifications__close-button px-3"
        >
          <v-btn
            icon
            @click="removeNotification(notification.id)"
          >
            <v-icon class="white--text">
              fa-times
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {random} from 'lodash';

export default {
  name: 'Notifications',
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    open({type, message, icon, duration, canDismiss}) {
      let notification = {
        id: 'notification_' + random(10000, 99999),
        type: type,
        message: message,
        icon: icon,
        canDismiss: canDismiss,
      };

      if (duration) {
        setTimeout((id) => {
          this.removeNotification(id);
        }, duration, notification.id);
      }

      this.notifications.push(notification);
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter((notification) => notification.id !== id);
    },
    getIconClassByType(type) {
      switch (type) {
        case 'success':
          return 'success--text';
        case 'error':
          return 'error--text';
        case 'warning':
          return 'warning--text';
        default:
          return 'info--text';
      }
    },
    getIconNameByType(type) {
      switch (type) {
        case 'success':
          return 'fa-check';
        case 'error':
          return 'fa-exclamation-triangle';
        case 'warning':
          return 'fa-exclamation-circle';
        default:
          return 'fa-info-circle';
      }
    },
  }
};
</script>

<style lang="scss">
.notifications {
  position: fixed;
  z-index: 20;

  width: 100%;
  max-width: 350px;
  bottom: 20px;
  right: 20px;

  .notifications__message {
    width: 100%;
    padding: 6px 0;
  }
}
</style>