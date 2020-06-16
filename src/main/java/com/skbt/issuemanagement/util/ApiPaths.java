package com.skbt.issuemanagement.util;

public final class ApiPaths {
    private static final String Base_PATH="/api";

    public static final class IssueCtrl{
        public static final String CTRL= Base_PATH + "/issue";
    }

    public static final class ProjectCtrl{
        public static final String CTRL= Base_PATH + "/project";
    }

    public static final class UserCtrl{
        public static final String CTRL= Base_PATH + "/users";
    }

    public static final class SayisalCtrl{
        public static final String CTRL= Base_PATH + "/sayisal/*";
    }

}
