import { Meteor } from 'meteor/meteor';
import { UserFeedback } from '../user_feedback.js';

Meteor.publish('feedback.userComments', function() {
    if (this.userId) {
        return UserFeedback.find({userId: Meteor.userId()});
    } else {
        return [];
    }
});
