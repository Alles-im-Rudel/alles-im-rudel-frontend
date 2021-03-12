<template>
  <base-card>
    <v-card-title>
      AllesImRudel.de V1
      <v-spacer />
      <user-chip :user="post.user" />
      <v-spacer />
      {{ post.createdAt | dateTime }}
    </v-card-title>
    <v-divider />
    <post-images :images="post.thumbnails" :show-only="2" only-thumbnail />
    <v-card-actions>
      <post-tags :tags="post.tags" />
      <v-spacer />
      <v-badge
          color="greyBlue"
          :content="post.commentsCount"
          overlap
      >
        <v-chip
            color="darkGrey"
            text-color="white"
        >
          Kommentare
        </v-chip>
      </v-badge>
      <v-spacer />
      <show-full-post-button :post-id="post.id"/>
      <v-spacer />
      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </base-card>
</template>

<script>
import UserChip from '@/components/users/UserChip';
import PostTags from '@/components/post/PostTags';
import PostImages from "@/components/post/PostImages";
import ShowFullPostButton from "@/components/post/ShowFullPostButton";

export default {
  components: {
    UserChip,
    PostTags,
    PostImages,
    ShowFullPostButton
  },
  props: {
    post: {
      required: true,
      type: Object
    },
    textLength: {
      required: false,
      default: () => 200
    }
  },
  computed: {
    text() {
      return this.post.text.length > this.textLength ? this.post.text.substring(0, this.textLength - 3) + "..." : this.post.text
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {}
}
</script>